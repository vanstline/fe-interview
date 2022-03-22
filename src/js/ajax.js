const xhr = new XMLHttpRequest()

xhr.open('GET', '/api/')

xhr.onreadystatechange = function () {
  const { readyState, status } = xhr
  if (readyState === 4) {
    if (status === 200) {
      // xhr.responseText
    }
  }
}

xhr.send()
