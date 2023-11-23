setTimeout(() => {
  const buffer1 = Buffer.from("hello ");
  const buffer2 = Buffer.from("world");
  const bufferArr = [buffer1, buffer2];
  const bufferString = Buffer.concat(bufferArr).toString();
  console.log(bufferString);
}, 3000);
