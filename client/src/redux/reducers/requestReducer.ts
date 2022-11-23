/* eslint-disable @typescript-eslint/explicit-function-return-type */

const requestReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_TEL': return action.payload
  }
}

export default requestReducer
