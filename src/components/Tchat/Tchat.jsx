import "./Tchat.scss"

function Tchat() {


    return (

        <section className="main-tchat">

            <section className="container-matchs">
                <div className="wrap-matchs"></div>
            </section>

            <section className="container-tchat">
                <div className="tchat-history-match"></div>
                <div className="tchat-messages"></div>
                <div className="tchat-input"></div>
            </section>

            <section className="container-description">
                <div className="description-match"></div>
            </section>


        </section>



    )



}

export default Tchat;