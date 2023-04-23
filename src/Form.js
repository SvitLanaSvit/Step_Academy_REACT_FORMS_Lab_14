import React, {Component} from 'react'

export default class User extends Component{
    firstnameRef = React.createRef();
    lastnameRef = React.createRef();
    phoneRef = React.createRef();
    emailRef = React.createRef();
    cityRef = React.createRef();

    render(){
        const handleSubmit=(event)=>{
            event.preventDefault();
            const phoneRegex = /^\+?[0-9]{7,}$/;
            let userFirstname = this.firstnameRef.current.value;
            let userLastname = this.lastnameRef.current.value;
            let userPhone = this.phoneRef.current.value;
            if(!phoneRegex.test(userPhone)){
                alert('Please enter a valid phone number.');
                return;
            }
                
            let userEmail = this.emailRef.current.value;
            let userCity = this.cityRef.current.value;
            alert(`${userFirstname} ${userLastname} ${userPhone} ${userEmail} ${userCity}`);
        }
        return (
        <div className='container'>
            <form className='row w-25' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name" className="form-label">Firstname:</label>
                    <input type="text" id="name" name='firstname' ref={this.firstnameRef}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="sName" className="form-label">Lastname:</label>
                    <input type="text" id="sName" name='surname' ref={this.lastnameRef}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="uPhone" className="form-label">Phone:</label>
                    <input type="tel" id="uPhone" name='phone' ref={this.phoneRef}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="uEmail" className="form-label">Email:</label>
                    <input type="email" id="uEmail" name='email' ref={this.emailRef}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="uCity" className="form-label">City:</label>
                    <input type="text" id="uCity" name='city' ref={this.cityRef}/>
                </div>
                <input type='submit' value="Register" className='btn btn-primary'/>
            </form>
        </div>
        )
    }
}
