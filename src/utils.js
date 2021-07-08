import qs from 'qs'

export function getSearchQuery() {
    return location.search ? qs.parse(location.search.slice(1)) : {}
}

export function getHashQuery() {
    return location.hash ? qs.parse(location.hash.slice(1)) : {}
}
