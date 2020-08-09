function resume() {
    let top_section = document.createElement("div");
    top_section.setAttribute("class","top-section");

    let top_name = document.createElement("div");
    top_name.setAttribute("class","top-name");

    let name1 = document.createElement("div");
    name1.setAttribute("class","name-block1");

    let name2 = document.createElement("div");
    name2.setAttribute("class","name-block2");

    let name3 = document.createElement("div");
    name3.setAttribute("class","name-block3");

    let name3h2 = document.createElement("h2");
    name3h2.setAttribute("style","display: inline-block;margin: 0;");
    let name3h2text = document.createTextNode("John Doe");
    name3h2.appendChild(name3h2text);

    name3.appendChild(name3h2);

    top_name.appendChild(name1);
    top_name.appendChild(name2);
    top_name.appendChild(name3);

    let top_address = document.createElement("div");
    top_address.setAttribute("class","top-address");
    let addressText = document.createTextNode("N.Damen Avenue,Chicago,999-999-9999,hello@gmail.com");
    top_address.appendChild(addressText);


    top_section.appendChild(top_name);
    top_section.appendChild(top_address);


    let bottom_section = document.createElement("div");
    bottom_section.setAttribute("class","bottom-section");

    let bottom_left = document.createElement("div");
    bottom_left.setAttribute("class","bottom-left");

        let profile=document.createElement("div");
        profile.setAttribute("class","profile");

    let profileh3 = document.createElement("h3");
    let profleh3span = document.createElement("span");
    
    let profleh3spani = document.createElement("i");
    profleh3spani.setAttribute("class","fa fa-user");
    profleh3span.appendChild(profleh3spani);

    let profileh3b = document.createElement("b");
    let profileh3btext = document.createTextNode("Profile");
    profileh3b.appendChild(profileh3btext);

    profileh3.appendChild(profleh3span);
    profileh3.appendChild(profileh3b);

    let profilep = document.createElement("p");
    let profileptext = document.createTextNode("I am a software developer with robust problem-solving skills proven experience in creating and designing software in a test-driven environment.");

    profilep.appendChild(profileptext);

    profile.appendChild(profileh3);
    profile.appendChild(profilep);

    let skills=document.createElement("div");
    skills.setAttribute("class","skills");

    let skillsh3 = document.createElement("h3");
    let skillsh3span = document.createElement("span");
    
    let skillsh3spani = document.createElement("i");
    skillsh3spani.setAttribute("class","fa fa-filter");
    skillsh3span.appendChild(skillsh3spani);

    let skillsh3b = document.createElement("b");
    let skillsh3btext = document.createTextNode("Skills");
    skillsh3b.appendChild(skillsh3btext);
    skillsh3.appendChild(skillsh3span);
    skillsh3.appendChild(skillsh3b);

    skills.appendChild(skillsh3);

    let skillsh4 = document.createElement("h4");
    let skillsh4b = document.createElement("b");
    let skillsh4btext = document.createTextNode("Technical Skills");

    skillsh4b.appendChild(skillsh4btext);
    skillsh4.appendChild(skillsh4b);

    skills.appendChild(skillsh4);
    
    let br=document.createElement("br"); 
    
    let skillstext1 = document.createTextNode("JavaScript");
    skills.appendChild(skillstext1);
    skills.appendChild(br);

    let skillstext2 = document.createTextNode("HTML");
    skills.appendChild(skillstext2);
    skills.appendChild(br);

    let skillstext3 = document.createTextNode("CSS");
    skills.appendChild(skillstext3);
    skills.appendChild(br);

    let skillstext4 = document.createTextNode("Java");
    skills.appendChild(skillstext4);
    skills.appendChild(br);

    let skillstext5 = document.createTextNode("Redux");
    skills.appendChild(skillstext5);
    skills.appendChild(br);

    let skillstext6 = document.createTextNode("Mongo");
    skills.appendChild(skillstext6);
    skills.appendChild(br);


    let skillsh42 = document.createElement("h4");
    let skillsh42b = document.createElement("b");
    let skillsh42btext = document.createTextNode("Addtional Skills");

    skillsh42b.appendChild(skillsh42btext);
    skillsh42.appendChild(skillsh42b);

    skills.appendChild(skillsh42);
    
    
    let skillstext21 = document.createTextNode("Product Mgmt");
    skills.appendChild(skillstext21);
    skills.appendChild(br);
    let skillstext22 = document.createTextNode("Recruitment");
    skills.appendChild(skillstext22);
    skills.appendChild(br);
    let skillstext23 = document.createTextNode("Business Development");
    skills.appendChild(skillstext23);
    skills.appendChild(br);
    let skillstext24= document.createTextNode("Editing");
    skills.appendChild(skillstext24);
    skills.appendChild(br);
    let skillstext25 = document.createTextNode("Marketing");
    skills.appendChild(skillstext25);
    skills.appendChild(br);
    let skillstext26 = document.createTextNode("FundRaising");
    skills.appendChild(skillstext26);
    skills.appendChild(br);




    bottom_left.appendChild(profile);
    bottom_left.appendChild(skills);
    
    bottom_section.appendChild(bottom_left);



    let bottom_right = document.createElement("div");
    bottom_right.setAttribute("class","bottom-right");

    let brwe1 = document.createElement("div");
    brwe1.setAttribute("class","Workexp1");

    let brwe1h3 = document.createElement("h3");
    let brwe1h3span = document.createElement("span");
    
    let brwe1h3spani = document.createElement("i");
    brwe1h3spani.setAttribute("class","fa fa-briefcase");
    brwe1h3span.appendChild(brwe1h3spani);

    let brwe1h3b = document.createElement("b");
    let brwe1h3btext = document.createTextNode("Work Experience");
    brwe1h3b.appendChild(brwe1h3btext);
    brwe1h3.appendChild(brwe1h3span);
    brwe1h3.appendChild(brwe1h3b);

    brwe1.appendChild(brwe1h3);

    let brwe1p = document.createElement("p");
    let brwe1ptext = document.createTextNode("Purchase supplies and equipment for 3 departments, accurately recording purchases and reducing reconciliation discrepancies by 35% Process expense reports, properly documenting and allocating expense items.Submit travel reimbursement requests and ensure missing receipt affidavits are completed in full. Served as primary point-of-contact for vendor inquiries, promptly investigating issues and solving concerns. Received, tracked, and accurately processed 50+ vendor invoice payments on weekly basis. Reconciled and batched payments on a daily basis");

    brwe1p.appendChild(brwe1ptext);
    brwe1.appendChild(brwe1p);

    bottom_right.appendChild(brwe1);





    let brwe2 = document.createElement("div");
    brwe2.setAttribute("class","Workexp2");

    let brwe2h3 = document.createElement("h3");
    let brwe2h3span = document.createElement("span");
    
    let brwe2h3spani = document.createElement("i");
    brwe2h3spani.setAttribute("class","fa fa-briefcase");
    brwe2h3span.appendChild(brwe2h3spani);

    let brwe2h3b = document.createElement("b");
    let brwe2h3btext = document.createTextNode("Work Experience");
    brwe2h3b.appendChild(brwe2h3btext);
    brwe2h3.appendChild(brwe2h3span);
    brwe2h3.appendChild(brwe2h3b);

    brwe2.appendChild(brwe2h3);

    let brwe2p = document.createElement("p");
    let brwe2ptext = document.createTextNode("Purchase supplies and equipment for 3 departments, accurately recording purchases and reducing reconciliation discrepancies by 35% Process expense reports, properly documenting and allocating expense items.Submit travel reimbursement requests and ensure missing receipt affidavits are completed in full. Served as primary point-of-contact for vendor inquiries, promptly investigating issues and solving concerns. Received, tracked, and accurately processed 50+ vendor invoice payments on weekly basis. Reconciled and batched payments on a daily basis");

    brwe2p.appendChild(brwe2ptext);
    brwe2.appendChild(brwe2p);

    bottom_right.appendChild(brwe2);

    bottom_section.appendChild(bottom_right);



    document.body.appendChild(top_section);
    document.body.appendChild(bottom_section);
}