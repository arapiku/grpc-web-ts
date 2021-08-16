import { Server, ServerCredentials } from "grpc"
import MessageService from "./MessageService"
import { MessageServiceService } from "./proto/MessageService_grpc_pb"

const server = new Server()
server.bind('0.0.0.0:9090', ServerCredentials.createInsecure())
server.addService(MessageServiceService, new MessageService())
server.start()