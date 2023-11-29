let arquivoJSON;

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  const reader = new FileReader();
  reader.onload = function(event) {
    const conteudo = event.target.result;
    arquivoJSON = JSON.parse(conteudo);
    document.getElementById('editor').value = JSON.stringify(arquivoJSON, null, 2);
  };
  
  reader.readAsText(file);
});

function salvar() {
  if (arquivoJSON) {
    const novoConteudo = document.getElementById('editor').value;
    try {
      const novoJSON = JSON.parse(novoConteudo);
      arquivoJSON = novoJSON;
      const blob = new Blob([JSON.stringify(arquivoJSON, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'arquivo_editado.json';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Formato JSON inválido!');
    }
  } else {
    alert('Por favor, selecione um arquivo JSON primeiro!');
  }
}