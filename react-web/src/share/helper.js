import moment from "moment";

export const formatDateClient = (date, pattern="DD/MM/YYYY") =>{
    return  moment(date).format(pattern);
}

export const formatDateServer = (date, pattern="YYYY-MM-DD") =>{
    return  moment(date).format(pattern);
}


export const getCurrentUser = () =>{
    var user = localStorage.getItem("user")
    if(user != "" && user != null){
        user = JSON.parse(user)
        return user;
    }
    return null;
}