import React, { useState, useEffect, useRef } from 'react'
import europeanSupport from "../styles/images/europeanSupport.svg";
import europeanUnion from "../styles/images/europeanUnion.svg";
import poland from "../styles/images/poland.svg";

const Footer = () => {
    const button = useRef(null);

    const [ active, setActive ] = useState(false);

    useEffect(()=>{
        console.log(`

#============================================================#
#                                                            #
#                    _,---''''''---,_                        #
#                 ,-'                '-.                     #
#              .-'                      '-.                  #
#            ,'                            '.                #
#           /                                \\               #
#         ,'         +--------------+         ',             #
#        /           |              |           \\            #
#       ,            |              |            ,           #
#       |            |              |            |           #
#      .             |              |             .          #
#      |             |              |             |          #
#      |             |              |             |          #
#      '             |              |             '          #
#       |            |              |            |           #
#       '            |              |            '           #
#        \\           |              |           /            #
#         '.         +--------------+         ,'             #
#           \\                                /               #
#            '.                            ,'                #
#              '-.                      .-'                  #
#                 '-._              _,-'                     #
#                     '---......---'                         #
#        __        __    _ _     ____          (r)           #
#        \\ \\      / /_ _| | | __/ ___|  ___  ___             #
#         \\ \\ /\\ / / _\` | | |/ /\\___ \\ / _ \\/ _ \\            #
#          \\ V  V / (_| | |   <  ___) |  __/  __/            #
#           \\_/\\_/ \\__,_|_|_|\\_\\|____/ \\___|\\___|            #
#                                                            #
#         "WALKSEE ???Narz??dzie SAAS do tworzenia              #
#        Wirtualnych Spacer??w z u??yciem smartfona"           #
#   Project funded by The National Centre for Research and   #
#        Development in the "Bridge Alfa" Programme          #
#                                                            #
#============================================================#
# Contacts: Krzysztof Wegner                                 #
#============================================================#
#                                                            #
#            Copyright (c) 2020 Walksee sp. z o.o.           #
#                  All rights reserved                       #
#                                                            #
# Address:                                                   #
#   Walksee sp. z o.o.,                                      #
#   ul. Matejki 2/4,                                         #
#   60-766 Poznan, Poland                                    #
#                                                            #
#============================================================#
        `)
        showMoreInfo();
    },[button]);

    const showMoreInfo = () =>{
        return button && button.current
            ? button.current.addEventListener('click', () => setActive(value => !value))
            : null ?? 'Please reload the page';
    }

    return(
        <>
            <footer className={
                active
                    ? "footer_Container_Updated"
                    : "footer_Container"
            }>
                <div className="container_Relative">
                    <div ref={button} className="show_Button">
                        {
                        active
                            ? 'ZWI?? INFORMACJ??'
                            : 'WI??CEJ O PROJEKCIE'
                        }
                    </div>
                    <div className="tool_Information">
                        <h2>"WALKSEE - NARZ??DZIE SAAS DO TWORZENIA</h2>
                        <h2>WIRTUALNYCH SPACER??W Z U??YCIEM SMARTFONA"</h2>
                        <h2>PROJEKT DOFINANSOWANY Z FUNDUSZY EUROPEJSKICH.</h2>
                    </div>
                    <div className="goals_Of_the_Project">
                        <h2>CELEM PROJEKTU JEST:</h2>
                        <h2>WYTWORZENIE NARZ??DZIA DO REJESTRACJI OBRAZU SFERYCZNEGO 360?? POMIESZCZE?? ZA POMOC?? INNOWACYJNEGO E-STATYWU.</h2>
                        <h2>PLANOWANYCH EFEKTEM MA BY?? ????CZENIE TYCH SFER W WIRTUALNE SPACERY PREZENTUJ??CE NIERUCHOMO??CI NA SERWISACH OG??OSZENIOWYCH -</h2>
                        <h2>CA??O???? PRZY WYKORZYSTANIU WY????CZNIE SMARTOFNA</h2>
                    </div>
                    <div className="budget_Information">
                        <h2>DOFINANSOWANIE PROJEKTU Z UE: 800 000 PLN</h2>
                        <h2>????CZNA WARTO???? PROJEKTU 1 000 000 PLN</h2>
                    </div>
                    <div className="typography">
                        <img className="logoIconTypography" src={europeanSupport} alt="logo" />
                        <img className="logoIconTypography" src={poland} alt="logo" />
                        <img className="logoIconTypography" src={europeanUnion} alt="logo" />
                    </div>
                    <div className="infoFinanse">
                        Projekt wsp????finansowany ze ??rodk??w Unii Europejskiej w ramach Europejskiego Funduszu Rozwoju Regionalnego.
                    </div>
                    <div className="project_Information">
                        UMOWA O WSPARCIE NUMER 10/2020 zgodnie z Projektem realizowanym w ramach Programu Operacyjnego Inteligenty Rozw??j 2014-2020,
                        dzia??anie 1.3: Prace B+R finansowane z udzia??em funduszy kapita??owych. Poddzia??anie 1.3.1: Wsparcie Projekt??w badawczo-rozwojowych w
                        fazie preseed przez fundosze typu proof of concept - BRIdge Alfa
                    </div>
                </div>
            </footer>
        </>
    );
}
export default  Footer;