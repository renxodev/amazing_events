( function () {
    var forms = document.querySelectorAll('.needs-validation')

    /* let array_form = Array.prototype.slice.call(forms) */
    let array_form = Array.from(forms)
    console.log(forms)
        array_form.forEach( each => each.addEventListener('submit', event => {
                                                                        if ( each.checkValidity() ) {
                                                                            Swal.fire({ 'title': 'Enviado',
                                                                                    'text': `A la brevedad nos pondremos en contacto.`,
                                                                                    'icon': 'success'   });
                                                                                    name.value=""
                                                                                    email.value=""
                                                                                    menssage.value=""
                                                                            event.preventDefault()
                                                                            event.stopPropagation()
                                                                        }else{  
                                                                                event.preventDefault()
                                                                                event.stopPropagation()
                                                                        }
                                                                
                                                                        each.classList.add('was-validated')
                                                                        }
                                                                    ,false)  ) 
                                                     
  }
) ()