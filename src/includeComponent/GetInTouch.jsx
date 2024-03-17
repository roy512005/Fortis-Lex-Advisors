// @ts-nocheck
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function GetInTouch() {
  const initialValues = {
    name: '',
    email: '',
    number:'',
    subject:'',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters').matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    number: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits').required('Mobile number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    const emailParams = {
      name: values.name,
      email: values.email,
      number:values.number,
      subject:values.subject,
      message: values.message
    };

    emailjs.send('service_xxjpucg', 'template_4p7myhy', emailParams, '5NcNPeje8_5uGGYVT')
      .then((response) => {
        console.log('Email sent successfully:', response);
        resetForm();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
    return(
        <>
           <div className="getintoch">
                <h2>Let’s Get In Touch</h2>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="row">
                        <div className="mb-3 form-box col-6">
                          <Field type="text" className="form-control" name="name" placeholder="Full Name *"/>
                          <ErrorMessage name="name" className="error" component="p" />
                        </div>
      
                        <div className="mb-3 form-box col-6">
                          <Field type="email" className="form-control" name="email" placeholder="Email Address *"/>
                          <ErrorMessage className="error" name="email" component="p" />
                        </div>
      
                        <div className="mb-3 form-box col-6">
                          <Field type="text" className="form-control" name="number" placeholder="Phone Number *"/>
                          <ErrorMessage className="error" name="number" component="p" />
                        </div>
      
                        <div className="mb-3 form-box col-6">
                          <Field type="text" className="form-control" name="subject" placeholder="Subject *"/>
                          <ErrorMessage className="error" name="subject" component="p" />
                        </div>
      
                        <div className="mb-3 form-box col-12">
                          <Field type="text" className="form-control" name="message" placeholder="Your Message *"/>
                          <ErrorMessage className="error" name="message" component="p" />
                        </div>
      
                        <div className="mb-3 form-box col-12">
                          <div>
                            <button type="submit" disabled={isSubmitting} className="com_btn m-auto"><span>Get An Appoinment</span></button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
           </div>
        </>
    );
}

export default GetInTouch;

                {/* <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 form-box col-6">
                          <input type="text" className="form-control" name="name" placeholder="Full Name *"  value={name} onChange={(event) => setName(event.target.value)}/>
                        </div>
      
                        <div className="mb-3 form-box col-6">
                          <input type="email" className="form-control" name="email" placeholder="Email Address *"  value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
      
                        <div className="mb-3 form-box col-6">
                          <input type="text" className="form-control" name="phone_number" placeholder="Phone Number *"  value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        </div>
      
                        <div className="mb-3 form-box col-6">
                          <input type="text" className="form-control" name="subject"  placeholder="Subject *"  value={subject} onChange={(event) => setSubject(event.target.value)}/>
                        </div>
      
                        <div className="mb-3 form-box col-12">
                          <textarea className="form-control" name="message" placeholder="Your Message *"  value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                        </div>
      
                        <div className="mb-3 form-box col-12">
                          <div>
                            <button type="submit" className="com_btn m-auto">Get An Appoinment</button>
                          </div>
                        </div>
                    </div>
                </form> */}