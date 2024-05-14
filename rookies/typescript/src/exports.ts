const name: string = "John Doe";

// named export: email
export const email: string = "dat.nguyenquoc1@nashtechglobal.com";

// named export: name
export { name };

// default export default
export default email;

// named export with alias: fullName
export { name as fullName };
