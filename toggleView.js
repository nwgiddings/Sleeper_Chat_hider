if (document.getElementsByClassName('dual-content-panel')[0].style.display == 'block') {
    document.getElementsByClassName('dual-content-panel')[0].style.display = 'flex'
} else {
    document.getElementsByClassName('dual-content-panel')[0].style.display = 'block';
    document.getElementsByClassName('center-panel')[0].style.maxWidth = '100%'
}