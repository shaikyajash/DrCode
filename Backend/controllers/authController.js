function getLoginPage(req, res) {
    res.render("index");
  }
  
  function getProfilePage(req, res) {
    if (!req.user) {
      return res.redirect("/");
    }
    res.render("profile", { user: req.user });
  }
  
  function logout(req, res) {
    req.logout(() => {
      res.redirect("/");
    });
  }
  
  module.exports = {
    getLoginPage,
    getProfilePage,
    logout,
  };
  