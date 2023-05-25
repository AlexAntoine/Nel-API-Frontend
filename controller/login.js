exports.getLoginPage = async(req, res, next)=>{
  
    res.render('login');

}

exports.userLogin =async (req, res, next)=>{
    console.log('hello');
}