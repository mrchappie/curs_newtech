const devicesParentEl = document.getElementById('devices');
const addDeviceBtn = document.getElementById('add__device__btn');

function addDevice() {
  devicesParentEl.insertAdjacentHTML(
    'beforeend',
    `<fieldset>
    <legend>Device 2</legend>
    <label for="device__type">
      Device type:
      <select name="device__type" id="device__type">
        <option value="smarthphone">Smarthphone</option>
        <option value="pc">PC</option>
        <option value="console">Console</option>
      </select>
    </label>
    <br />
    <label for="device__operating__system">
      Device operating system:
      <select
        name="device__operating__system"
        id="device__operating__system"
      >
        <option value="android">Android</option>
        <option value="ios">IOS</option>
        <option value="windows">Windows</option>
        <option value="linux">linux</option>
      </select>
    </label>
    <br />
    <label for="device__name">
      Device name:
      <input type="text" name="device__name" id="device__name" />
    </label>
    <br />
    <button>Delete</button>
  </fieldset>`
  );
}

addDeviceBtn.addEventListener('click', addDevice);
