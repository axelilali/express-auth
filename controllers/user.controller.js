exports.allAccess = (req, res) => {
  res.status(200).send('Public content')
}

exports.dashboard = (req, res) => {
  res.status(200).send('Dashboard')
}
