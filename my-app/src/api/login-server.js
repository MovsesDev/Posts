
export const loginUser = (instance, email, password) => {
   return new Promise(async (resolve, reject)=> {
        try {
            const res = await instance.get("users");
            const user = res.data?.find(user => user.email === email && user.password === password);
            resolve(user);
          } catch (e) {
            reject(e);
          }
    })
}