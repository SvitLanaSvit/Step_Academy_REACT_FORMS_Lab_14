import React, {useRef} from 'react'

export function ShowRefUser(){
    let firstnameRef = useRef('Svitlana');
    let lastnameRef = useRef('Kizilpinar');
    let phoneRef = useRef('1234567895');
    let emailRef = useRef('sfg@gmail.com');
    let cityRef = useRef('Lviv');

    // const phoneRegex = /^\+?[0-9]{7,}$/;
    // const phone = phoneRef.current.value;
    // if(!phoneRegex.test(phone)){
    //     alert('Please enter a valid phone number.');
    //     return;
    // }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`${firstnameRef.current.value} ${lastnameRef.current.value} ${phoneRef.current.value} ${emailRef.current.value} ${cityRef.current.value}`);
    }

    return (
        <div className='container'>
            <form className='row w-25' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name" className="form-label">Firstname:</label>
                    <input className='form-control' type="text" id="name" name='firstname' ref={firstnameRef} defaultValue={firstnameRef.current}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="sName" className="form-label">Lastname:</label>
                    <input className='form-control' type="text" id="sName" name='surname' ref={lastnameRef} defaultValue={lastnameRef.current}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="uPhone" className="form-label">Phone:</label>
                    <input className='form-control' type="tel" id="uPhone" name='phone' ref={phoneRef} defaultValue={phoneRef.current}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="uEmail" className="form-label">Email:</label>
                    <input className='form-control' type="email" id="uEmail" name='email' ref={emailRef} defaultValue={emailRef.current}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="uCity" className="form-label">City:</label>
                    <input className='form-control' type="text" id="uCity" name='city' ref={cityRef} defaultValue={cityRef.current}/>
                </div>
                <input type='submit' value="Register" className='btn btn-primary'/>
            </form>
        </div>
    )
}