package com.example.application.views.helloflow;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.vaadin.lineawesome.LineAwesomeIconUrl;

@PageTitle("Hello Flow")
@Route("")
@Menu(order = 0, icon = LineAwesomeIconUrl.GLOBE_SOLID)
public class HelloFlowView extends HorizontalLayout {

    private TextField name;
    private Button sayHello;

    public HelloFlowView() {
        name = new TextField(getTranslation("your.name"));
        sayHello = new Button(getTranslation("say.hello"));
        sayHello.addClickListener(e -> {
            Notification.show(getTranslation("hello.message", name.getValue()));
        });
        sayHello.addClickShortcut(Key.ENTER);

        setMargin(true);
        setVerticalComponentAlignment(Alignment.END, name, sayHello);

        add(name, sayHello);
    }

}
