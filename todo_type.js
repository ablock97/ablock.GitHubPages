const mongoose = require('mongoose'); 
const graphql = require('graphql'); //package used to build our graphql schema
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql; //necessary types for defining our schema

const TodoType = new GraphQLObjectType({
  name:  'TodoType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
  })
}); 

module.exports = TodoType;

{
  "data": {
    "todos": [
      {
        "id": "5c5c21184c9edc006857c11b",
        "likes": 17,
        "content": ""
      },
      {
        "id": "5c5c26e84c9edc006857c124",
        "likes": 4,
        "content": "asd"
      },
      {
        "id": "5c5c29b296f75b0068f3b9db",
        "likes": 0,
        "content": "asdad"
      },
      {
        "id": "5c5c29c296f75b0068f3b9dc",
        "likes": 0,
        "content": "eq123"
      }
    ]
  }
}