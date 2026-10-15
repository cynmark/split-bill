'use strict';

// All text is inserted with textContent so future data can be rendered safely.
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function decorativeIcon(className, text) {
  const icon = element('span', className, text);
  icon.setAttribute('aria-hidden', 'true');
  return icon;
}

function renderBalances(balances) {
  const cards = balances.map((balance) => {
    const card = element('article', `balance-card ${balance.tone}`);
    const heading = element('div', 'balance-heading');
    heading.append(element('h3', '', balance.label), decorativeIcon('balance-icon', balance.icon));
    card.append(heading, element('p', 'balance-amount', balance.amount), element('p', 'balance-detail', balance.detail));
    return card;
  });
  document.querySelector('#balance-cards').replaceChildren(...cards);
}

function renderGroups(groups) {
  const cards = groups.map((group) => {
    const card = element('article', 'group-card');
    const info = element('div', 'group-info');
    const title = element('div', 'group-title');
    title.append(element('p', 'group-category', group.category), element('h3', '', group.name), element('p', 'group-members', group.members));
    info.append(decorativeIcon(`group-icon ${group.theme}`, group.icon), title);
    const bottom = element('div', 'group-bottom');
    const avatars = element('div', 'avatar-stack');
    avatars.setAttribute('aria-hidden', 'true');
    group.initials.forEach((initials) => avatars.append(element('span', 'mini-avatar', initials)));
    bottom.append(avatars, element('p', `group-balance ${group.tone}`, group.balance));
    card.append(info, bottom);
    return card;
  });
  document.querySelector('#group-list').replaceChildren(...cards);
}

function renderActivity(activities) {
  const items = activities.map((activity) => {
    const item = element('li', 'activity-item');
    const body = element('div', 'activity-body');
    body.append(element('h3', '', activity.title), element('p', '', activity.description), element('span', 'activity-time', activity.time));
    item.append(decorativeIcon(`activity-icon ${activity.theme}`, activity.icon), body);
    if (activity.amount) item.append(element('span', 'activity-amount', activity.amount));
    return item;
  });
  document.querySelector('#activity-list').replaceChildren(...items);
}

const demo = window.SplitBillDemo;
renderBalances(demo.balances);
renderGroups(demo.groups);
renderActivity(demo.activity);

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuToggle.focus();
  }
});
navigation.querySelector('a').addEventListener('click', closeMenu);

let messageTimeout;
document.querySelectorAll('[data-feature]').forEach((button) => {
  button.addEventListener('click', () => {
    const message = document.querySelector('#feature-message');
    clearTimeout(messageTimeout);
    message.textContent = `${button.dataset.feature} is coming in a later phase. This is a display-only preview.`;
    message.hidden = false;
    messageTimeout = setTimeout(() => { message.hidden = true; }, 6000);
  });
});
