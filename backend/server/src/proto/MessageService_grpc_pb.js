// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var MessageService_pb = require('./MessageService_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_Message(arg) {
  if (!(arg instanceof MessageService_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return MessageService_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PostMessageResponse(arg) {
  if (!(arg instanceof MessageService_pb.PostMessageResponse)) {
    throw new Error('Expected argument of type PostMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PostMessageResponse(buffer_arg) {
  return MessageService_pb.PostMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageServiceService = exports.MessageServiceService = {
  getMessageStream: {
    path: '/MessageService/GetMessageStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: MessageService_pb.Message,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
  postMessage: {
    path: '/MessageService/PostMessage',
    requestStream: false,
    responseStream: false,
    requestType: MessageService_pb.Message,
    responseType: MessageService_pb.PostMessageResponse,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_PostMessageResponse,
    responseDeserialize: deserialize_PostMessageResponse,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
