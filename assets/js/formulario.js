document.getElementById('input__nombre').addEventListener('focus', () => {
    document.getElementById('label__nombre').classList.remove('inicial');
    document.getElementById('label__nombre').classList.remove('out');
    document.getElementById('label__nombre').classList.add('in');
});
document.getElementById('input__nombre').addEventListener('blur', () => {
    if (document.getElementById('input__nombre').value == '') {
        document.getElementById('label__nombre').classList.remove('in');
        document.getElementById('label__nombre').classList.add('out');
    }
});

document.getElementById('input__e-mail').addEventListener('focus', () => {
    document.getElementById('label__e-mail').classList.remove('inicial');
    document.getElementById('label__e-mail').classList.remove('out');
    document.getElementById('label__e-mail').classList.add('in');
});
document.getElementById('input__e-mail').addEventListener('blur', () => {
    if (document.getElementById('input__e-mail').value == '') {
        document.getElementById('label__e-mail').classList.remove('in');
        document.getElementById('label__e-mail').classList.add('out');
    }
});

document.getElementById('input__asunto').addEventListener('focus', () => {
    document.getElementById('label__asunto').classList.remove('inicial');
    document.getElementById('label__asunto').classList.remove('out');
    document.getElementById('label__asunto').classList.add('in');
});
document.getElementById('input__asunto').addEventListener('blur', () => {
    if (document.getElementById('input__asunto').value == '') {
        document.getElementById('label__asunto').classList.remove('in');
        document.getElementById('label__asunto').classList.add('out');
    }
});

document.getElementById('input__mensaje').addEventListener('focus', () => {
    document.getElementById('label__mensaje').classList.remove('inicial');
    document.getElementById('label__mensaje').classList.remove('out');
    document.getElementById('label__mensaje').classList.add('in');
});
document.getElementById('input__mensaje').addEventListener('blur', () => {
    if (document.getElementById('input__mensaje').value == '') {
        document.getElementById('label__mensaje').classList.remove('in');
        document.getElementById('label__mensaje').classList.add('out');
    }
});
document.getElementById('input__mensaje').addEventListener('keydown', () => {
    let height = document.getElementById('input__mensaje').scrollHeight+'px';
    document.getElementById('input__mensaje').style.height = height;
});
document.getElementById('input__mensaje').addEventListener('keydown', () => {
    let height = document.getElementById('input__mensaje').scrollHeight+'px';
    document.getElementById('input__mensaje').style.height = height
    console.log(height);
});