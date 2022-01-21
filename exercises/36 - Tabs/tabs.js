const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role=tabpanel]'));

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

function handleTabClick(event) {
    // hide all tab panles
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    //mark all tabs as uinselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    })

    //mark the clicked tab selected
    event.currentTarget.setAttribute('aria-selected', true);

    //find the associated tabPanel and show it
    //method 1
    const id = event.currentTarget.id;
    // const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
    // tabPanel.hidden = false;

    //method 2 find in the array of tab
    const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;   
}


