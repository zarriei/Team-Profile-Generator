
function generateEngineer({name, role, id, email, github}) {
  return `
  <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">${name}</div>
      <div class="card-body">
        <h5 class="card-title">${role}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item bg-warning">ID:  ${id}</li>
        <li class="list-group-item bg-warning">Email:  ${email}</li>
        <li class="list-group-item bg-warning">Github:  ${github}</li>
      </ul>
      </div>
    </div>`
    }
  
    module.export = generateEngineer;

