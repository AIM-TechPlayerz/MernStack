// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const obj={ name: "John Doe",age: 50 }
  res.status(200).json(obj)
}
