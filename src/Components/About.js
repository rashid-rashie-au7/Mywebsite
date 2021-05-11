import React from 'react'
import mypic from '../assets/me.jpeg';
import './About.css'

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-4 col-xm-12 img-wraper">
                    <div className="dodeca irr">
                        <div className="dode1">
                            <div className="dode2">
                                <img className="profile-img" src={mypic} alt="My picture" width="400" height="373" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-xm-12">
                    <div className="about-content">
                    <h1>About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam debitis consequatur ullam repellat
                        iure voluptas, nemo quaerat dicta fugiat quod in animi voluptatibus magni praesentium tempore odio 
                        deleniti voluptatum officia ea earum vitae facilis molestiae nostrum. Adipisci unde quam illum neque 
                        facere consequuntur. Magnam molestias rem hic nostrum commodi incidunt, ratione nesciunt inventore sapiente, 
                        ipsa laborum error. Praesentium quis aliquid mollitia numquam! Ex natus error accusamus laboriosam doloremque 
                        nostrum facilis, non laborum necessitatibus deserunt odit cumque minus. Ut adipisci quae dolore optio, 
                        laboriosam omnis quis recusandae ad dignissimos aperiam illo exercitationem magni labore. Ad hic, perspiciatis 
                        at placeat eum sequi dolor sunt quo obcaecati corrupti consequuntur voluptatem! Reiciendis modi sunt, earum provident 
                        quo voluptas magni amet vero possimus aspernatur vitae laudantium excepturi nesciunt tenetur? Eligendi, quidem consequatur. 
                        Quidem assumenda sapiente quaerat sed dolores impedit praesentium quia eligendi tempore illo autem, alias incidunt 
                        aperiam ab molestias officiis cum quisquam, dicta reprehenderit.</p>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default About
