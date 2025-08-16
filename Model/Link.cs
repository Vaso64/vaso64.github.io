namespace Portfolio.Model;

[Serializable]
public record Link
{
    public string Name { get; set; }
    public string Icon { get; set; } = "/media/icons/web.svg";
    public string Url { get; set; }
}