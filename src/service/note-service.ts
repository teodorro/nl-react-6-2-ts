const address = 'http://localhost:7070/notes';

export async function getNotes() {
  const response = await fetch(`${address}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Ошибка HTTP: " + response.status);
}

export async function addNote(note: string) {
  const response = await fetch(`${address}`, {
    method: 'POST',
    body: JSON.stringify([note]),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    return await response.status;
  }
  throw new Error("Ошибка HTTP: " + response.status);
}

export async function deleteNote(id: number) {
  const response = await fetch(`${address}/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return true;
  }
  throw new Error("Ошибка HTTP: " + response.status);
}
