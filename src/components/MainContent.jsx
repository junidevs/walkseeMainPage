import  React from 'react'

const MainContent = () => {
    const Redirect = ( link ) => {
        return window.location = link;
    }
    return(
        <>
            <main className="content_Container">
                <section className="section_Title">
                    <h2>REAL ESTATE 360 VIRTUAL TOUR</h2>
                    <h2>MAKE IT ONLY WITH YOUR PHONE</h2>
                </section>
                <section className="redirect_Section">
                    <button className="redirect_Button" onClick={() => Redirect("https://beta.walksee.pl/")}>TRY IT OUT</button>
                </section>
                <section className="section_Description">
                    <h2>THE WAY WE SEE WALKSEE?</h2>
                    <h2>EASY TO GET EASY TO USE NO ADDITIONAL EQUIPMENT</h2>
                    <h2>NO NEED TO RENT ANYTHING</h2>
                    <h2>CREATED FOR CLASSIFIELDS WEBSITES AND REAL ESTATE AGENTS</h2>
                    <h2>BUILT USING COMPLEX TECHNOLOGY, BUT COST OPTIMISED AND SIMPLE</h2>
                    <h2>TO INTEGRATE IT'S EASY TO WALKSEE</h2>
                </section>
            </main>
        </>
    );
}
export default  MainContent;