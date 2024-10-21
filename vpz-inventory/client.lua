local keybind = lib.addKeybind({
    name = 'inventory',
    description = 'Ava värdja inventory',
    defaultKey = 'I',
    onPressed = function(self)
        SetNuiFocus(true, true)
        SendNUIMessage({ action = 'openInventory' })

       
        local playerPed = PlayerPedId()
        local animDict = "anim@heists@prison_heistig1_p1_guard_checks_bus"
        local animName = "loop"

       
        lib.requestAnimDict(animDict)

        
        TaskPlayAnim(playerPed, animDict, animName, 8.0, 1.0, -1, 49, 0, false, false, false)
    end
})

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false) -- Remove focus
    SendNUIMessage({ action = 'closeInventory' })

    local playerPed = PlayerPedId()
    ClearPedTasks(playerPed)

    cb('ok')
end)
