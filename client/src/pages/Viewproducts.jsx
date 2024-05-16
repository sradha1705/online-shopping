import React from 'react'
import Card from '../components/Card'

export default function Viewproducts() {
    return (
        <div style={{backgroundColor:'blanchedalmond'}}><header>
        <h4>TOP SELLING PRODUCTS</h4><br/>
    </header>
    <div className="row row-cols-1 row-cols-md-4 g-4"><br />
          <div className="col">
            <Card  />
            &nbsp;
               
          </div>
   
                </div>
        </div>
    )
}
