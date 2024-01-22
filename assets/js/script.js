//scalabilità
if (document.documentElement.clientWidth < 768) { 
  document.querySelector("meta[name=viewport]").setAttribute(
        'content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
}

//menù laterale

  function openmenu(){
    document.getElementById("sidemenu").style.right= "0";
  }

  function closemenu(){
    document.getElementById("sidemenu").style.right = "-240px";
  }

//form
const sendEmail = (e) => {
  e.preventDefault()

  emailjs
  .sendForm(
    'service_j3dpcan',
    'template_j8uxwz4',
    refForm.current,
    'fhSJAynnLUrcYDvVi'
  )
  .then (
    () => {
      alert('Your Message has been sent')
      window.location.reload(false)
    },
    () => {
      alert('Failed to send message, please try again')
    }
  )
}
