// // import fetch from 'dva/fetch';

// function checkStatus(response){
//     console.log("checkStatus");
//     console.log(response);
//     if(response.status>=200 && response.status<300){
//         return response;
//     }
//     const errortext=response.status;
//     const error=new Error();
//     error.name=errortext;
//     error.response=response;
// }

// export default function request(url,options){
//     console.log(url);
//     console.log(options);
//     console.log(fetch);
//     const defaultOptions={
//         credentials:'include',//强制加入凭据头
//     };
//     const newOptions={...defaultOptions,...options};
//     if(newOptions.multipartForm){
//         newOptions.headers={
//             ...newOptions.headers,
//         };
//     }else{
//         if(newOptions.method === 'POST' || newOptions.method === 'PUT'){
//             newOptions.headers={
//                 Accept:'application/json',
//                 'Content-Type':'application/json;charset=utf-8',
//                 ...newOptions.headers,
//             };
//             newOptions.body=JSON.stringify(newOptions.body);
//         }else if(newOptions.method === 'GET'){
//             newOptions.headers={
//                 Accept:'application/json',
//                 'Content-Type':'application/json;charset=utf-8',
//                 ...newOptions.headers,
//             };
//         }
//     }
//     let caller=null;
//     if(newOptions.multipartForm){
//         return fetch({
//             url:url,
//             method:newOptions.method?newOptions.method:'POST',
//             processData:false,
//             data:newOptions.body,
//         })
//     }else{
//         console.log(url);
//         console.log(newOptions)

//         return fetch(url,newOptions).then(checkStatus)
//             .then(response => {
//                 console.log(response)
//                 return response.text();//转化成字符串格式
//             })
//             .then( response => {
//                 console.log(text)
//                 if(text){
//                     return JSON.parse(text);//用于将JSON字符串转化为js对象
//                 }
//             })
//             .catch((err)=>{
//                 console.log(err);
//                 console.log(err.name)
//                 console.log(err.response)
//                 try{
//                     return err.response.json().then(e=>{
//                         let error=new Error();
//                         if(err.response.status === 502){
//                             error={
//                                 error,
//                                 ...{errorText:"网管错误",httpStatus:502},
//                                 message:"错误502",
//                             };
//                         }else if(err.response.status === 503){
//                             error={
//                                 error,
//                                 ...{
//                                     errorText:"服务器不可用,服务器暂时过载或维护",
//                                     httpStatus:503,
//                                 },
//                                 message:'错误503',
//                             };
//                         }else if(err.response.status === 504){
//                             error={
//                                 error,
//                                 ...{errorText:"网关超时",httpStatus:504},
//                                 message:'错误504',
//                             };
//                         }else {
//                             error={error,...e,message:`错误${name}`}
//                         }

//                         throw error;
//                     });
//                 }catch(ex){
//                     return response.text().then(()=>{
//                         let error=new Error();
//                         error={
//                             error,
//                             ...{errorText:'未知错误',httpStatus:500},
//                             messgae:'错误500',
//                         };
//                         throw error;
//                     })
//                 }
//             });
//     }

// }