 const createRole = (req, res) => {
    console.log(req);
    const resData = {
        success: true,
        message: 'Role Created',
        data: req.body.data
    }
    res.json(resData);
};

export default createRole;