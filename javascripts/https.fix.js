if (window.location.protocol !== 'https:') {
    window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
}