const parentBoxes = document.querySelectorAll('.inner-box-parent');

for (key of parentBoxes) {
    const elem = document.createElement('div');
    elem.classList.add('inner-box-parent-white');
    key.append(elem);
}