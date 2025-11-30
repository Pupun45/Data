let records = global.records || [];
global.records = records;

export default function handler(req, res) {
  res.status(200).json(records);
}
