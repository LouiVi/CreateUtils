function OnStart() {
    // Create a layout
    var lay = app.CreateLayout("Linear", "VCenter,FillXY");
    
    // Create a button to generate bogus data
    var btnGenerate = app.CreateButton("Generate Bogus Data", 0.8);
    btnGenerate.SetOnTouch(generateBogusData);
    lay.AddChild(btnGenerate);
    
    // Create a text view to display the generated data
    var txtOutput = app.CreateText("", 1, 0.5);
    txtOutput.SetTextSize(18);
    lay.AddChild(txtOutput);
    
    app.AddLayout(lay);
}

function generateBogusData() {
    // Generate random data
    var name = getRandomName();
    var email = getRandomEmail();
    var address = getRandomAddress();
    
    // Display the generated data
    var output = "Name: " + name + "\nEmail: " + email + "\nAddress: " + address;
    app.SetText(output);
}

function getRandomName() {
    var names = ["Bebi Castro", "John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomEmail() {
    var domains = ["example.com", "test.com", "demo.com"];
    var randomName = getRandomName().replace(" ", "").toLowerCase();
    var domain = domains[Math.floor(Math.random() * domains.length)];
    return randomName + "@" + domain;
}

function getRandomAddress() {
    var addresses = [
        "123 Main St, Springfield, USA",
        "456 Elm St, Metropolis, USA",
        "789 Oak St, Gotham, USA"
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
}