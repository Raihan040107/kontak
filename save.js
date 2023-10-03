function save() {
    // Get data from localStorage and store it in the contactList array
    // We need to use JSON.parse because the data is in string format and needs to be converted to an array
    var contactList = JSON.parse(localStorage.getItem('listItem')) || [];

    // Get the last array to get the last id and store it into the variable id
    var id;
    contactList.length !== 0 ? contactList.forEach((item) => (id = item.id)) : (id = 0);

    if (document.getElementById('id').value) {
        // Edit contactList array based on value
        contactList.forEach((vaLue, index) => {
            if (document.getElementById('id').value == vaLue.id) {
                vaLue.name = document.getElementById('name').value;
                vaLue.age = document.getElementById('age').value;
                vaLue.address = document.getElementById('address').value;
                vaLue.phone = document.getElementById('phone').value;
            }
        });
        document.getElementById('id').value = '';
    } else {
        // Save
        // Get data from the form
        var item = {
            id: id + 1,
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
        };
        // Add item data to the contactList array
        contactList.push(item);
    }
    // Save array into localStorage
    localStorage.setItem('listItem', JSON.stringify(contactList));

    // Update the table list
    ShowALLData();

    // Remove form data
    document.getElementById('form').reset();
}
