var articleView = (function() {

    var articleTemplate = `
      <div class="articleItem">
        <div class="articleItemInner">
          <div class="articleItemDesc">
          <h1></h1>
          <h2></h2>
          <h3></h3>
          <p></p>
          </div>
          <div class="articleItemInitiatives">
          </div>
        </div>
      </div>
    `

    var articleSamples = `
    <div class="articleItem">
      <div class="articleItemInner">
      <h1>Connect - Coping with Fragmentation</h1>

        <div class="articleItemDesc">
        <h2>Assessing and Reforming the Current Architecture of Global Environmental Governance</h2>
        <h3>By Isailovic, M., Wiederberg, O.E. & Pattberg, P.H.</h3>
        <p>This article discusses challenges to accountability in the context of transnational climate governance. It argues that the emergence of a distinct transnational regime complex and the increasingly integrated structure of international and transnational climate governance create new challenges for using established analytical frameworks that rely on accountability regimes for individual actor types. Instead, studying accountability requires a system-level conceptualization and a revisiting of accountability regimes, taking diversity and networked governance structures into account.</p>
        <a>Read Full Article</a>
        </div>
        <div class="articleItemInitiatives">
        <p>Involved initiatives:</p>
        <div class="mapPopupInnerInitiatives" ><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="ClimateWise" data-date="2006" data-members="31" data-acro="CW" data-desc="Global insurance industry?s leadership group driving action on climate change risk: it is facilitated by the University of Cambridge Institute for Sustainability Leadership. The group leverages the insurance industry?s expertise to better understand, communicate and act on climate risks. Members commit to action against the ClimateWise Principles and are independently reviewed against these annually." data-type="Private" data-role="3" data-theme="4" data-theme2="" data-theme3="" ><div class="mapAcro">CW</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://sciencebasedtargets.org/" data-name="Science Based Targets" data-date="2014" data-members="4" data-acro="SBT" data-desc="SBT contribute to GHG mitigation by helping companies follow scientific advice in determining  how much they must reduce in order to stay below a 2 degree threshold. The institution aims to make this target setting standard business practice by 2018, in the hope that this will inspire more companies to follow along with signaling to policy makers that the private sector is willing to play its part in decarbonizing the economy." data-type="Private" data-role="1" data-theme="6" data-theme2="" data-theme3="" ><div class="mapAcro">SBT</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="CarbonNeutral Protocol" data-date="1997" data-members="1" data-acro="CarbonNeutral" data-desc="Market leaders and pioneers in the world of carbon neutral certification and carbon reduction. Provides a robust framework and credible certification that a company, brand or product has reduced their carbon emissions to net zero." data-type="Private" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CarbonNeutral</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://www.planvivo.org/" data-name="Plan Vivo" data-date="2008" data-members="1" data-acro="PlanVivo" data-desc="Framework for supporting communities to manage their natural resources more sustainably, with a view to generating?climate, livelihood and ecosystem benefits. Participants are rural smallholders and communities dependent on natural resources for livelihoods. Activities are implemented on smallholder or community land (owned or long-term user rights)." data-type="Private" data-role="10" data-theme="5" data-theme2="" data-theme3="" ><div class="mapAcro">PlanVivo</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="https://www.transitionnetwork.org/" data-name="Transition Towns" data-date="2005" data-members="1" data-acro="TT" data-desc="A Transition Town also called a transition initiative involves community projects seeking to build resilience in response to climate change." data-type="Private" data-role="1" data-theme="11" data-theme2="" data-theme3="" ><div class="mapAcro">TT</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="https://www.carbontrust.com/client-services/footprinting/footprint-certification/carbon-trust-standard/" data-name="Carbon Trust Standard for Carbon" data-date="2001" data-members="1" data-acro="CTSC" data-desc="World?s leading independent certification of an organization?s impact in respect of the three primary constituents of environmental sustainability: energy usage and greenhouse gas emissions, water usage, management and effluent, waste management and disposal." data-type="Hybrid" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CTSC</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="Institutional Investors Group on Climate Change" data-date="2012" data-members="122" data-acro="IIGCC" data-desc="Forum for collaboration on climate change for investors, it provides investors with a collaborative platform to encourage public policies, investment practices, and corporate behavior that address long-term risks and opportunities associated with climate change." data-type="Hybrid" data-role="3" data-theme="4" data-theme2="" data-theme3="" ><div class="mapAcro">IIGCC</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="Carbon Disclosure Project" data-date="2000" data-members="1" data-acro="CDP" data-desc="Largest collection globally of self-reported climate change, water and forest-risk data through their global system companies, investors and cities are better able to mitigate risk, capitalize on opportunities and make investment decisions that drive action towards a more sustainable world." data-type="Private" data-role="8" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CDP</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://www.cdsb.net/" data-name="Climate Disclosure Standards Board" data-date="2007" data-members="9" data-acro="CDSB" data-desc="International consortium of business and environmental organizations committed to the integration of climate change-related information into mainstream corporate reporting. It advances its mission by acting as a forum for collaboration on how existing standards and practices can be supported and enhanced so as to link financial and climate change-related reporting and respond to regulatory developments." data-type="Private" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CDSB</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div></div>
        </div>
      </div>
    </div>

    <div class="articleItem">
      <div class="articleItemInner">
      <h1>Cities to the rescue? Assessing the performance of transnational municipal networks in global climate governance</h1>

        <div class="articleItemDesc">
        <h2>Assessing and Reforming the Current Architecture of Global Environmental Governance</h2>
        <h3>By Bansard, J.S., Pattberg, P.H. & Widerberg</h3>
        <p>Despite the proliferation and promise of subnational climate initiatives, the institutional architecture of transnational municipal networks (TMNs) is not well understood. With a view to close this research gap, the article empirically assesses the assumption that TMNs are a viable substitute for ambitious international action under the United Nations Framework Convention on Climate Change (UNFCCC). It addresses the aggregate phenomenon in terms of geographical distribution, central players, mitigation ambition and monitoring provisions.</p>
        <a>Read Full Article</a>

        </div>
        <div class="articleItemInitiatives">
        <p>Involved initiatives:</p>

        <div class="mapPopupInnerInitiatives" ><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="ClimateWise" data-date="2006" data-members="31" data-acro="CW" data-desc="Global insurance industry?s leadership group driving action on climate change risk: it is facilitated by the University of Cambridge Institute for Sustainability Leadership. The group leverages the insurance industry?s expertise to better understand, communicate and act on climate risks. Members commit to action against the ClimateWise Principles and are independently reviewed against these annually." data-type="Private" data-role="3" data-theme="4" data-theme2="" data-theme3="" ><div class="mapAcro">CW</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="CarbonNeutral Protocol" data-date="1997" data-members="1" data-acro="CarbonNeutral" data-desc="Market leaders and pioneers in the world of carbon neutral certification and carbon reduction. Provides a robust framework and credible certification that a company, brand or product has reduced their carbon emissions to net zero." data-type="Private" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CarbonNeutral</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://www.planvivo.org/" data-name="Plan Vivo" data-date="2008" data-members="1" data-acro="PlanVivo" data-desc="Framework for supporting communities to manage their natural resources more sustainably, with a view to generating?climate, livelihood and ecosystem benefits. Participants are rural smallholders and communities dependent on natural resources for livelihoods. Activities are implemented on smallholder or community land (owned or long-term user rights)." data-type="Private" data-role="10" data-theme="5" data-theme2="" data-theme3="" ><div class="mapAcro">PlanVivo</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="https://www.transitionnetwork.org/" data-name="Transition Towns" data-date="2005" data-members="1" data-acro="TT" data-desc="A Transition Town also called a transition initiative involves community projects seeking to build resilience in response to climate change." data-type="Private" data-role="1" data-theme="11" data-theme2="" data-theme3="" ><div class="mapAcro">TT</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="Institutional Investors Group on Climate Change" data-date="2012" data-members="122" data-acro="IIGCC" data-desc="Forum for collaboration on climate change for investors, it provides investors with a collaborative platform to encourage public policies, investment practices, and corporate behavior that address long-term risks and opportunities associated with climate change." data-type="Hybrid" data-role="3" data-theme="4" data-theme2="" data-theme3="" ><div class="mapAcro">IIGCC</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="Carbon Disclosure Project" data-date="2000" data-members="1" data-acro="CDP" data-desc="Largest collection globally of self-reported climate change, water and forest-risk data through their global system companies, investors and cities are better able to mitigate risk, capitalize on opportunities and make investment decisions that drive action towards a more sustainable world." data-type="Private" data-role="8" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CDP</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div>
        </div>
      </div>
    </div>
        </div>
    <div class="articleItem">

    <div class="articleItemInner">
    <h1>Governing by targets: reductio ad unum and evolution of the two-degree climate target</h1>

      <div class="articleItemDesc">
      <h2>Targets have become an increasingly important tool of environmental governance, from national environmental targets to targets within broader global goals such as the Sustainable Development Goals</h2>
      <h3>By Morseletto P., F. Biermann and P. Pattberg, International Environmental Agreements</h3>
      <p>Targets are widely employed in environmental governance. In this paper, we investigate the construction of the 2 °C climate target, one of the best known targets in global environmental governance. Our paper examines this target through a historical reconstruction that identifies four different phases: framing, consolidation and diffusion, adoption, and disembeddedness. Our analysis shows that, initially, the target was science-driven and predominantly EU-based; it then became progressively accepted at the international level, despite a lack of broader debate among governments on the policy implications and required measures for implementation.</p>
      <a>Read Full Article</a>
      
      </div>
      <div class="articleItemInitiatives">
      <p>Involved initiatives:</p>

      <div class="mapPopupInnerInitiatives" ><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="ClimateWise" data-date="2006" data-members="31" data-acro="CW" data-desc="Global insurance industry?s leadership group driving action on climate change risk: it is facilitated by the University of Cambridge Institute for Sustainability Leadership. The group leverages the insurance industry?s expertise to better understand, communicate and act on climate risks. Members commit to action against the ClimateWise Principles and are independently reviewed against these annually." data-type="Private" data-role="3" data-theme="4" data-theme2="" data-theme3="" ><div class="mapAcro">CW</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://sciencebasedtargets.org/" data-name="Science Based Targets" data-date="2014" data-members="4" data-acro="SBT" data-desc="SBT contribute to GHG mitigation by helping companies follow scientific advice in determining  how much they must reduce in order to stay below a 2 degree threshold. The institution aims to make this target setting standard business practice by 2018, in the hope that this will inspire more companies to follow along with signaling to policy makers that the private sector is willing to play its part in decarbonizing the economy." data-type="Private" data-role="1" data-theme="6" data-theme2="" data-theme3="" ><div class="mapAcro">SBT</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="CarbonNeutral Protocol" data-date="1997" data-members="1" data-acro="CarbonNeutral" data-desc="Market leaders and pioneers in the world of carbon neutral certification and carbon reduction. Provides a robust framework and credible certification that a company, brand or product has reduced their carbon emissions to net zero." data-type="Private" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CarbonNeutral</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://www.planvivo.org/" data-name="Plan Vivo" data-date="2008" data-members="1" data-acro="PlanVivo" data-desc="Framework for supporting communities to manage their natural resources more sustainably, with a view to generating?climate, livelihood and ecosystem benefits. Participants are rural smallholders and communities dependent on natural resources for livelihoods. Activities are implemented on smallholder or community land (owned or long-term user rights)." data-type="Private" data-role="10" data-theme="5" data-theme2="" data-theme3="" ><div class="mapAcro">PlanVivo</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="https://www.transitionnetwork.org/" data-name="Transition Towns" data-date="2005" data-members="1" data-acro="TT" data-desc="A Transition Town also called a transition initiative involves community projects seeking to build resilience in response to climate change." data-type="Private" data-role="1" data-theme="11" data-theme2="" data-theme3="" ><div class="mapAcro">TT</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="https://www.carbontrust.com/client-services/footprinting/footprint-certification/carbon-trust-standard/" data-name="Carbon Trust Standard for Carbon" data-date="2001" data-members="1" data-acro="CTSC" data-desc="World?s leading independent certification of an organization?s impact in respect of the three primary constituents of environmental sustainability: energy usage and greenhouse gas emissions, water usage, management and effluent, waste management and disposal." data-type="Hybrid" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CTSC</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="Institutional Investors Group on Climate Change" data-date="2012" data-members="122" data-acro="IIGCC" data-desc="Forum for collaboration on climate change for investors, it provides investors with a collaborative platform to encourage public policies, investment practices, and corporate behavior that address long-term risks and opportunities associated with climate change." data-type="Hybrid" data-role="3" data-theme="4" data-theme2="" data-theme3="" ><div class="mapAcro">IIGCC</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="" data-name="Carbon Disclosure Project" data-date="2000" data-members="1" data-acro="CDP" data-desc="Largest collection globally of self-reported climate change, water and forest-risk data through their global system companies, investors and cities are better able to mitigate risk, capitalize on opportunities and make investment decisions that drive action towards a more sustainable world." data-type="Private" data-role="8" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CDP</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div><div class="mapPopupSingleInitiative" data-category="undefined" data-website="http://www.cdsb.net/" data-name="Climate Disclosure Standards Board" data-date="2007" data-members="9" data-acro="CDSB" data-desc="International consortium of business and environmental organizations committed to the integration of climate change-related information into mainstream corporate reporting. It advances its mission by acting as a forum for collaboration on how existing standards and practices can be supported and enhanced so as to link financial and climate change-related reporting and respond to regulatory developments." data-type="Private" data-role="1" data-theme="7" data-theme2="" data-theme3="" ><div class="mapAcro">CDSB</div><div class=""><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div></div>
      </div>
    </div>
  </div>


    `

    var init = function() {
        if ($('#articleViewInner').html().length == 0) {
            articleView.articleViewAppendSamples()

        }
    }



    var articleViewAppendSamples = function() {
        $('#articleViewInner').append(this.articleSamples)

    }

    return {
        init: init,
        articleSamples: articleSamples,
        articleTemplate: articleTemplate,
        articleViewAppendSamples: articleViewAppendSamples,
    };
})();
