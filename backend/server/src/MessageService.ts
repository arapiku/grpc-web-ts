import { EventEmitter } from 'events'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { sendUnaryData, ServerUnaryCall, ServerWritableStream } from 'grpc'
import { IMessageServiceServer } from './proto/MessageService_grpc_pb'
import { Message, PostMessageResponse } from './proto/MessageService_pb'

class MessageService implements IMessageServiceServer {
  private readonly messageEventEmitter = new EventEmitter()

  private readonly pastMessages: Message[] = []

  public getMessageStream(call: ServerWritableStream<Empty>) {
    this.pastMessages.forEach(message => call.write(message))

    const handler = (message: Message) => call.write(message)
    this.messageEventEmitter.on('post', handler)

    call.on('close', () => this.messageEventEmitter.removeListener('post', handler))
  }

  public postMessage(call: ServerUnaryCall<Message>, callback: sendUnaryData<PostMessageResponse>) {
    const message = call.request
    this.pastMessages.push(message)
    this.messageEventEmitter.emit('post', message)

    const response = new PostMessageResponse()
    response.setStatus('ok')
    callback(null, response)
  }
}

export default MessageService