/**
 * quasi-art.ru
 * 2018
 * Скрипт для обновления даты начала занятий у групп.
 */

const addZero = (n) => {
    return String('00' + n).slice(-2);
};
const Super = {};
Super.state = {};
Super.setState = (patch, callback) => {
	const newState = Object.assign(Super.state, patch);
	Super.state = newState;
	Super.render();
	if (typeof callback === 'function') {
	  callback();
	}
};

Super.init = () => {
	Super.state.selectedGroups = new Set();
	Super.state.days = 0;
	Super.state.selectedAll = true;
	
	const inputDays = document.getElementById('super-days');
	if (inputDays) {
		Super.state.days = parseInt(inputDays.value, 10);
		inputDays.addEventListener('input', () => {
			Super.setState({ days: parseInt(inputDays.value, 10) });
		});
	}
	
	const buttonUp = document.getElementById('up');
	buttonUp.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
	
	const buttonAll = document.getElementById('all');
	buttonAll.addEventListener('click', () => {
		/**
		 * Если количество всех групп равно количеству выбранных групп,
		 * то нужно убрать выделение со всех групп,
		 * иначе -- выбрать все группы.
		 */
		if (Super.state.selectedAll) {
			Super.state.selectedGroups.clear();
			Super.setState({
				selectedAll: false,
			});
		} else {
			const groupsElements = document.querySelectorAll('[data-item="group"]');
			for (let i = 0; i < groupsElements.length; i++) {
				groupsElements[i].setAttribute('data-checked', '1');
				const groupId = parseInt(groupsElements[i].getAttribute('data-id'), 10);
				Super.state.selectedGroups.add(groupId);
			}
			Super.setState({
				selectedAll: true,
			});			
		}
	});
	
	const buttonSubmit = document.getElementById('run');
	Super.state.uri = buttonSubmit.getAttribute('data-uri');
	buttonSubmit.addEventListener('click', () => {
		buttonSubmit.setAttribute('disabled', true);
		Super.sendRequest(() => {
			buttonSubmit.removeAttribute('disabled');
			window.location.reload();
		});
	});
	
	const groupsElements = document.querySelectorAll('[data-item="group"]');
	if (groupsElements) {
		for (let i = 0; i < groupsElements.length; i++) {
			const checked = groupsElements[i].getAttribute('data-checked') == '1';
			const groupId = parseInt(groupsElements[i].getAttribute('data-id'), 10);
			groupsElements[i].addEventListener('click', () => {
				Super.handleGroupClick(groupId);
			});
			Super.state.selectedGroups.add(groupId);
		}
	}
	
	Super.render();
};

Super.sendRequest = (callbackSuccess) => {
	const http = new XMLHttpRequest();
	let groups = [];
	Super.state.selectedGroups.forEach((group) => {
		groups.push(group);
	});
	const params = 'groups='+groups.join(',')+'&days='+Super.state.days;
	http.open('POST', Super.state.uri, true);
	
	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	http.onreadystatechange = function() {//Call a function when the state changes.
	    if (http.readyState == 4 && http.status == 200) {
	        callbackSuccess();
	    }
	};
	http.send(params);	
};

Super.handleGroupClick = (groupId) => {
	const groupsElements = document.querySelectorAll('[data-item="group"]');

	if (Super.state.selectedGroups.has(groupId)) {
		Super.state.selectedGroups.delete(groupId);
		Super.state.selectedAll = false;
	} else {
		Super.state.selectedGroups.add(groupId);
	}
	
	const selectedAllGroups = groupsElements && groupsElements.length === Super.state.selectedGroups.size;

	Super.setState({
		selectedGroups: Super.state.selectedGroups,
		selectedAll: selectedAllGroups,
	});
};

Super.render = () => {
	const buttonAll = document.getElementById('all');
	if (buttonAll) {
		const iconChecked = buttonAll.querySelector('[data-for-checked="1"');
		const iconUnchecked = buttonAll.querySelector('[data-for-checked="0"');
		if (Super.state.selectedAll) {
			iconChecked.style.display = 'block';
			iconUnchecked.style.display = 'none';
		} else {
			iconChecked.style.display = 'none';
			iconUnchecked.style.display = 'block';
		}
	}
	
	const groupsElements = document.querySelectorAll('[data-item="group"]');
	if (groupsElements) {
		for (let i = 0; i < groupsElements.length; i++) {
			const groupId = parseInt(groupsElements[i].getAttribute('data-id'), 10);
			const checked = Super.state.selectedGroups.has(groupId);
			const iconChecked = groupsElements[i].querySelector('[data-for-checked="1"');
			const iconUnchecked = groupsElements[i].querySelector('[data-for-checked="0"');
			if (checked) {
				iconChecked.style.display = 'block';
				iconUnchecked.style.display = 'none';
			} else {
				iconChecked.style.display = 'none';
				iconUnchecked.style.display = 'block';
			}
			
			const days = parseInt(Super.state.days, 10);
			const cellDateNow = groupsElements[i].querySelector('[data-now]');
			const cellDateFuture = groupsElements[i].querySelector('[data-future]');
			const now = new Date(cellDateNow.getAttribute('data-now'));
			const future = new Date(now.getTime() + 1000*60*60*24*days);
			const futureFormatted = addZero(future.getDate()) + '.' + addZero(future.getMonth() + 1) + '.' + future.getFullYear();
			cellDateFuture.innerHTML = futureFormatted;
		}
	}
};

Super.init(); 