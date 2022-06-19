import React from 'react';

const Form = (props) => {
    return (
        <div>
            <div>
                <br/>
                <div className="container">
                    <form action="http://127.0.0.1:3002/create" method="post">
                        <div style={{width: '30%'}} className="form-group">
                            <input type="text" className="form-control" name="BookID" placeholder="Book ID"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group">
                            <input type="text" className="form-control" name="Title" placeholder="Book Title"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group">
                            <input type="text" className="form-control" name="Author" placeholder="Book Author"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}}>
                            <button className="btn btn-success" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;