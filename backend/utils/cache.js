const cashe= new Map();
const TTL= 5 * 6 * 1000;

export const  getcashe=(key)=>{
    const entry =  cashe.get(key);
    if(!entry){
        return null;
    }
    if(Date.now() - entry.timestamp > TTL){
        cashe.delete(key);
        return null;
    }
    return entry.Date;

};

export const setcash=(key, data)=>{
    cashe.set(key,{
        data,
        timestamp:Date.now(),
    });
};