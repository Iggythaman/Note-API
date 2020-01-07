const setEditModal = (id) => {
    // We will implement this later
}

const deleteNotes = (id) => {
    // We will implement this later
}

const loadNotes = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:5000/notes", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

    for (let note of notes) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${note.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${note.id}</h6>

                        <div>Author: ${note.author}</div>
                        <div>Number Of Pages: ${notes.numOfPages}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${note.id})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('notes').innerHTML = document.getElementById('notes').innerHTML + x;
    }
}

loadNotes();