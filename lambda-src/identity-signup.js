const axios = require("axios")
const { HASURA_SECRET } = process.env

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 410,
      body: "Unsupported Request Method",
    })
  }

  const { user } = JSON.parse(event.body)

  const responseBody = {
    query: `
  mutation insertUser($id: String, $email:String, $name:String){
    insert_users(objects: {id: $id, email: $email, name: $name}) {
      affected_rows
    }
  }
  `,
    variables: {
      id: user.id,
      email: user.email,
      name: user.user_metadata.full_name,
    },
  }

  try {
    const result = await axios.post(
      "https://stayingathomeclub.herokuapp.com/v1/graphql",
      responseBody,
      {
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": HASURA_SECRET,
        },
      }
    )
  } catch (e) {
    console.log(e)

    return {
      statusCode: 500,
      body: "Something is wrong",
    }
  }
  return {
    statusCode: 200,
    body: "{}",
  }
}
