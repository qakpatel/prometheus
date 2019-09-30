import { stat } from "fs";

const LeadReducer = (state = { dialogData: {}, submitDialog: {}, data: [], user: [], updateStatus: {},}, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, dialogData: action.payload };
        case 'SET_DATA':
            return { ...state, user: state.user.concat(action.payload) };
        case 'GET_TABLE':
            return { ...state, data: action.payload };
        case 'GET_TIMELINE':
            return { ...state, user: action.payload };
        case 'UPDATE_STATUS':
            return { ...state, updateStatus: action.payload };
        case 'TO_EXCEL':
            return { ...state, excel: action.payload };
            case 'UPDATE_ASSIGN':
                state.data.data.forEach((a,index)=>{
                    if(a.id===action.payload.id){
                        state.data[index]=action.payload
                    }
                })
                case 'UPDATE_PRIORITY':
                state.data.data.forEach((a,index)=>{
                    if(a.id===action.payload.id){
                        state.data[index]=action.payload
                    }
                })
            return { ...state, data: state.data };
          case 'FILTER_BY_DATE':
              console.log(action.payload)
              return {
                  ...state,advanceFilter:action.payload
              }
              case 'FILTER_BY_GENDER':
                    return {
                        ...state,advanceFilter:action.payload
                }
                case 'GET_GRADES':
                    return {
                        ...state,grades:action.payload
                    }
                    case 'TASK_COMPLETE':
                        state.user.forEach((a,index)=>{
                          if(a.id===action.payload){
                              state.user[index]=action.payload
                          }
                        })
                            return {
                                ...state,user:state.user
                            }       
        default:
            return state;
    }
};

export default LeadReducer;

