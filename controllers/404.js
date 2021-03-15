exports.pageNotFound = (req, res, next) => {
    res.status(404).render('404', { docTitle3: '404 Not Found' });
}