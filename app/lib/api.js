import firebase from 'firebase'

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]

export function getPeople() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}

export function registerUserFirebase(data) {
  console.log('in register firebase api', )
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        resolve(result.email)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


