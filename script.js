function showPopup() {
    $('#overlay').show();
    $('#popup').show();
}

function closePopup() {
    $('#overlay').hide();
    $('#popup').hide();
}

function loadProfiles() {
    var profilesDiv = $('#profiles');
    profilesDiv.empty();

    if (profiles.length === 0) {
        profilesDiv.append('<p class="empty">Empty</p>');
    } else {
        profiles.forEach(function (profile) {
            profilesDiv.append(`
                <div class="profile">
                    <img class="profile-icon" src="./images/profile-icon.png" alt="Profile Icon">
                    <span class="profile-name">${profile}</span>
                    <button class="remove-profile">x</button>
                </div>
            `);
        });
    }
}

function addProfile(profileName) {
    profileName = profileName.trim();
    if (profileName !== '') {
        profiles.push(profileName);
        loadProfiles();
        closePopup();
        $('#profileName').val('');
    } else {
        alert('Please enter a profile name.');
    }
}

$(document).on('click', '.remove-profile', function () {
    var profileName = $(this).siblings('.profile-name').text();
    profiles = profiles.filter(function (profile) {
        return profile !== profileName;
    });
    loadProfiles();
});

$(document).ready(function () {
    loadProfiles();

    $('#addProfile').click(function () {
        var profileName = $('#profileName').val();
        addProfile(profileName);
    });

    $('#overlay').click(function () {
        closePopup();
    });
});
